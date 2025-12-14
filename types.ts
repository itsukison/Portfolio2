export interface Project {
  id: number;
  client: string;
  title: string;
  description: string;
  year: string;
  imageUrl: string;
  tags: string[];
}

export interface AsciiConfig {
  characters: string;
  fontSize: number;
  color: string;
}