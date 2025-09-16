# Snack Template

A modern React application template with basic configuration for working with [snack-uikit](https://github.com/cloud-ru-tech/snack-uikit). This template provides a solid foundation for building applications using Cloud.ru's design system and UI components.

## Features

- **React 19** with TypeScript
- **Vite** for fast development and building
- **snack-uikit** integration with pre-configured components
- **SCSS Modules** for component-scoped styling
- **ESLint & Prettier** for code quality and formatting
- **Stylelint** for CSS/SCSS linting
- **Husky** for Git hooks
- **Path aliases** for clean imports
- **SVG loader** for optimized SVG handling

## 📦 Included snack-uikit Components

- `@snack-uikit/figma-tokens-nachos` - Design tokens
- `@snack-uikit/icons` - Icon components
- `@snack-uikit/locale` - Internationalization
- `@snack-uikit/typography` - Typography components

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🎨 Styling

The project uses SCSS Modules for component-scoped styling. Each component has its own `styles.module.scss` file that generates unique class names to prevent style conflicts.

## 🔗 Path Aliases

The project includes convenient path aliases for clean imports:

- `#app` → `src/app`
- `#components` → `src/components`
- `#constants` → `src/constants`
- `#pages` → `src/pages`
- `#types` → `src/types`

## �� Resources

- **Storybook**: [snack-uikit Storybook](https://cloud-ru-tech.github.io/snack-uikit)
- **GitHub**: [snack-uikit Repository](https://github.com/cloud-ru-tech/snack-uikit)
- **Figma**: [Design System](<https://www.figma.com/files/1101513230643708615/team/1194627249980298820/DS-(FF)>)
- **Cloud.ru**: [Official Website](https://cloud.ru)

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📝 Development

This template includes pre-configured linting and formatting tools:

- **ESLint** with Cloud.ru configuration
- **Prettier** for code formatting
- **Stylelint** for SCSS linting
- **Husky** for pre-commit hooks
- **lint-staged** for staged file linting

## �� About Cloud.ru

This template is part of Cloud.ru's frontend development ecosystem, providing a standardized starting point for new projects using the snack-uikit design system.
