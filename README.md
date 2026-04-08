# testdw

Vite + React demo do Daily Wire design system (Explore + podcast cards).

## GitHub Pages

O site fica em **`https://<seu-usuario>.github.io/<nome-do-repo>/`** (ex.: repo `testdw` → `https://henrique-menezzo.github.io/testdw/`).

### 1. Criar o repositório no GitHub

1. GitHub → **New repository** → nome (ex. `testdw`), **público** (Pages grátis em repo público).
2. **Não** marques “Add README” se já vais fazer push deste projeto.

### 2. Primeiro push

Na pasta do projeto:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

Substitui `SEU_USUARIO` e `NOME_DO_REPO`.

### 3. Ativar Pages (GitHub Actions)

1. No repo: **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**: escolhe **GitHub Actions** (não “Deploy from a branch”).
3. O workflow `.github/workflows/deploy-pages.yml` corre no push para `main` (ou `master`).

Na primeira vez, abre **Actions** e confirma que o job **Deploy to GitHub Pages** terminou em verde. O URL aparece em **Settings → Pages** e no sumário do job **deploy**.

### 4. Pacote privado `@henrique-menezzo/dailywire-ds`

O workflow usa `github.token` para instalar do GitHub Packages quando o pacote é acessível a esse repositório.

Se **`npm ci` falhar** no Actions:

1. Cria um **Personal Access Token** (classic) com scope **`read:packages`**.
2. No repo: **Settings** → **Secrets and variables** → **Actions** → **New repository secret** → nome `NODE_AUTH_TOKEN`, valor = o PAT.

### 5. Nome do repositório

O build usa `VITE_BASE_PATH: /<nome-do-repo>/`. O **nome do repo no GitHub** tem de ser o mesmo que aparece na URL do Pages (idealmente **só minúsculas**, sem espaços).

## Local

```bash
npm install
npm run dev
```

Build de produção (raiz `/`):

```bash
npm run build
npm run preview
```
