import conversa from "../assets/images/imagensBackend/conversa.png";
import SwaggerAI from "../assets/images/imagensBackend/SwaggerAi.png"
import todoList from "../assets/images/imagensBackend/to-do-list.jpg";

export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string;
  image: string;
  viewProjectLink?: string;
  viewCodeLink: string;
}

export const backendProjects: Project[] = [
  {
    title: "AI-Data-Copilot",
    date: "Maio 2026 – Junho 2026",
    description:
      "Copiloto corporativo de dados que democratiza o acesso às informações da empresa através de linguagem natural, eliminando a necessidade de conhecimento em SQL.",
    technologies: "FastAPI, Python, SQLAlchemy, Alembic, PostgreSQL, Docker, Docker Compose, Ollama e GitHub Actions",
    image: conversa,
    viewCodeLink: "https://github.com/gMoraes1/AI-Data-Copilot",
  },
  {
    title: "AI-Wellness-Recommendation-API",
    date: "Fevereiro 2026 – Março 2026",
    description:
      "Assistente de recomendação de bem-estar baseado em IA generativa. A aplicação expõe uma API REST que integra um modelo de linguagem (LLM) para gerar atividades personalizadas com base no perfil, objetivos e restrições do usuário.",
    technologies: "FastAPI, Python, SQLAlchemy, PostgreSQL, Docker, Docker Compose e Ollama Local",
    image: SwaggerAI,
    viewCodeLink: "https://github.com/gMoraes1/AI-Wellness-Recommendation-API",
  },
  {
    title: "To-do List",
    date: "Agosto 2025 – Setembro 2025",
    description:
      "Aplicação web para gerenciamento de tarefas, permitindo adicionar, editar, concluir ou excluir atividades. Backend em Python com FastAPI e banco PostgreSQL para persistência. A aplicação sobe via Docker Compose com containers separados de PostgreSQL, FastAPI e o frontend em React.",
    technologies: "React, Vite, Python, FastAPI, PostgreSQL, Docker, Docker Compose, CI/CD",
    image: todoList,
    viewCodeLink: "https://github.com/gMoraes1/to-do-list-completed",
  },
];
