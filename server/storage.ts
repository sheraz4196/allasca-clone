import { users, formSubmissions, type User, type InsertUser, type FormSubmission, type InsertFormSubmission } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createFormSubmission(submission: InsertFormSubmission): Promise<FormSubmission>;
  getFormSubmissions(limit?: number, offset?: number): Promise<FormSubmission[]>;
  getFormSubmissionById(id: number): Promise<FormSubmission | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private formSubmissions: Map<number, FormSubmission>;
  currentId: number;
  currentSubmissionId: number;

  constructor() {
    this.users = new Map();
    this.formSubmissions = new Map();
    this.currentId = 1;
    this.currentSubmissionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFormSubmission(submission: InsertFormSubmission): Promise<FormSubmission> {
    const id = this.currentSubmissionId++;
    const formSubmission: FormSubmission = { 
      formType: submission.formType,
      formName: submission.formName,
      name: submission.name || null,
      email: submission.email,
      phone: submission.phone || null,
      location: submission.location || null,
      projectType: submission.projectType || null,
      budget: submission.budget || null,
      description: submission.description || null,
      pageUrl: submission.pageUrl || null,
      ipAddress: submission.ipAddress || null,
      userAgent: submission.userAgent || null,
      id, 
      createdAt: new Date() 
    };
    this.formSubmissions.set(id, formSubmission);
    return formSubmission;
  }

  async getFormSubmissions(limit = 50, offset = 0): Promise<FormSubmission[]> {
    const submissions = Array.from(this.formSubmissions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(offset, offset + limit);
    return submissions;
  }

  async getFormSubmissionById(id: number): Promise<FormSubmission | undefined> {
    return this.formSubmissions.get(id);
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createFormSubmission(submission: InsertFormSubmission): Promise<FormSubmission> {
    const [formSubmission] = await db
      .insert(formSubmissions)
      .values(submission)
      .returning();
    return formSubmission;
  }

  async getFormSubmissions(limit = 50, offset = 0): Promise<FormSubmission[]> {
    const submissions = await db
      .select()
      .from(formSubmissions)
      .orderBy(formSubmissions.createdAt)
      .limit(limit)
      .offset(offset);
    return submissions;
  }

  async getFormSubmissionById(id: number): Promise<FormSubmission | undefined> {
    const [submission] = await db.select().from(formSubmissions).where(eq(formSubmissions.id, id));
    return submission || undefined;
  }
}

export const storage = new DatabaseStorage();
