# Portfólio — Kauan Felipe

Portfólio pessoal de **Kauan Felipe**, desenvolvedor full-stack (.NET · React · SQL Server).

🔗 **Ao vivo:** [kauanfelipe96.github.io/personal-portfolio](https://kauanfelipe96.github.io/personal-portfolio/)

## Destaques

- **Bilíngue (PT/EN)** com detecção automática do idioma do navegador e persistência da escolha
- **Background animado em WebGL** (aura field com shaders), com respeito a `prefers-reduced-motion` e pausa quando a aba fica oculta
- **Design glassmorphism** com navbar flutuante, animações de reveal por scroll e contadores animados
- **Deploy automático** no GitHub Pages via GitHub Actions a cada push na `main`

## Stack

| | |
|---|---|
| UI | React 18 |
| Build | Vite |
| Estilo | Tailwind CSS |
| Ícones | react-icons |
| CI/CD | GitHub Actions → GitHub Pages |

## Rodando localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção em dist/
npm run preview  # serve o build local
npm run lint     # ESLint
```

## Estrutura

```
src/
├── components/   # Navbar, Home (hero), Experiences, Stack, Education, Contact, Footer
├── i18n/         # traduções PT/EN + LanguageContext
├── assets/       # imagens e ícones
└── index.css     # tokens de design e estilos globais
```
