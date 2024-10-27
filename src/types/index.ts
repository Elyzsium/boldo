

import { HTMLAttributes } from "react"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
  }
  
export interface BarChartProps {
    percentage: number;
    label: string;
  }
  
export interface BlogPost {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

export interface ProgressBarProps {
  value: number;
  color: string;
}

