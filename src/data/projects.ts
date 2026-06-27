import redoclyEscolar from "../assets/images/imagensBackend/redoclyEscolar.jpeg";
import swagger from "../assets/images/imagensBackend/Swagger.png";
import swaggerJobs from "../assets/images/imagensBackend/swaggerJobs.png";
import todoList from "../assets/images/imagensBackend/to-do-list.jpg";

import cep from "../assets/images/ImagensFrontend/cep.png";
import smart from "../assets/images/ImagensFrontend/smart.png";
import land from "../assets/images/ImagensFrontend/land.png";
import smartApp from "../assets/images/ImagensFrontend/smartApp.png";

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
    title: "API ReDocly Escolar",
    date: "Junho 2025 – Julho 2025",
    description:
      "Projeto feito junto com a imersão da Alura, onde foi desenvolvida uma API para o sistema escolar, na qual o usuário pode cadastrar alunos, cursos e turmas, além de consultar as informações de cada um deles. A API foi documentada utilizando o ReDocly.",
    technologies: "FastAPI, Python, SQLAlchemy, SQLite, ReDocly, Docker e Docker Compose",
    image: redoclyEscolar,
    viewCodeLink: "https://github.com/gMoraes1/API-Escola",
  },
  {
    title: "API Filmes",
    date: "Maio 2025 – Junho 2025",
    description:
      "API para gerenciar filmes, na qual o usuário pode cadastrar, consultar, atualizar e deletar filmes e suas informações. Feita com FastAPI e banco de dados SQLite, usando ORM para manipular as tabelas do banco.",
    technologies: "FastAPI, Python, SQLAlchemy, SQLite, Docker e Docker Compose",
    image: swagger,
    viewCodeLink: "https://github.com/gMoraes1/API-Filmes",
  },
  {
    title: "Job Monitor",
    date: "Dezembro 2025 – Janeiro 2026",
    description:
      "API REST desenvolvida em Java com Spring Boot para gerenciar e monitorar a execução de jobs/processos. Criada com foco em boas práticas de arquitetura, uso de Spring Data JPA, validações, persistência de dados e organização em camadas.",
    technologies: "Java, Spring Boot, Spring Data JPA, Docker, MySQL",
    image: swaggerJobs,
    viewCodeLink: "https://github.com/gMoraes1/Job-Monitor",
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

export const frontendProjects: Project[] = [
  {
    title: "Projeto Via-CEP",
    date: "Julho 2023 – Agosto 2023",
    description:
      "Projeto desenvolvido para buscar informações de endereços através da API Via-CEP. O usuário insere o CEP e obtém informações como logradouro, bairro, cidade e estado.",
    technologies: "JavaScript, HTML, CSS",
    image: cep,
    viewProjectLink: "https://busca-cep-b8uz.vercel.app/",
    viewCodeLink: "https://github.com/gMoraes1/BuscaCep.git",
  },
  {
    title: "SmartBinder",
    date: "Abril 2024 – Dezembro 2024",
    description:
      "Site feito para o TCC da ETEC no curso de desenvolvimento de sistemas. A equipe tinha um cliente buscando um aplicativo para organizar tarefas e automatizar funções exercidas pelos professores. O site apresenta o aplicativo e suas funcionalidades.",
    technologies: "ReactJS, TypeScript, Material-UI",
    image: smart,
    viewProjectLink: "https://smartbinder.vercel.app/",
    viewCodeLink: "https://github.com/etecguarulhos/smart-binder-web.git",
  },
  {
    title: "Landing Page",
    date: "Julho 2024 – Agosto 2024",
    description:
      "Projeto desenvolvido com ReactJS e Tailwind CSS. Foi o primeiro contato com essa tecnologia de estilização e mais um passo no aprendizado de React.",
    technologies: "ReactJS, TypeScript, Tailwind CSS",
    image: land,
    viewProjectLink: "https://projeto-em-react-e-tailwind-css.vercel.app/",
    viewCodeLink: "https://github.com/gMoraes1/projeto-em-react-e-Tailwind-CSS",
  },
  {
    title: "SmartBinder App",
    date: "Janeiro 2024 – Dezembro 2024",
    description:
      "Aplicativo feito em React Native para o TCC da ETEC no curso de desenvolvimento de sistemas. Ajuda a organizar tarefas e automatizar funções exercidas pelos professores, utilizando Firebase para autenticação e banco de dados.",
    technologies: "React Native, Firebase",
    image: smartApp,
    viewCodeLink: "https://github.com/etecguarulhos/smart-binder-app.git",
  },
];
