export interface Command {
  name: string;
  category: string;
  description: string;
  permissions?: string[];
  cooldown?: number;
  execute(...args: any): any;
}
