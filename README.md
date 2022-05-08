# NextJs Typescript Monorepo

### Installing the dependencies

```bash
yarn
```

### Running a project locally

```bash
yarn dev <project-name>
# or
npm run dev <project-name>
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploying a project on Vercel

```bash
yarn deploy <project-name>
# or
npm run deploy <project-name>
```

### Building a project

```bash
yarn build <project-name>
# or
npm run build <project-name>
```

### Running a project from build

```bash
yarn start <project-name>
# or
npm start <project-name>
```

### Importing modules

- From outside the current project

```ts
import Test from "src/components/Test";
```

- From inside the current project

```ts
import Test from "@/components/Test";
```
