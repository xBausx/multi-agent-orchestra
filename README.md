# Multi-LLM Orchestrator (Frontend)

This is the front-end for a Multi-LLM (Large Language Model) Chatbot System. It allows users to send prompts to an intelligent backend that dynamically chooses the best LLM (e.g., OpenAI, Claude, Gemini, Anthropic) based on the input. The frontend is built using **Next.js 14** (App Router) and **TailwindCSS**.

---

## 🧰 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React Hooks**
- **Modular structure** with `components`, `lib`, and `types`

---

## 📁 Folder Structure

```
src/
├── app/                → Main chat page (`/`)
├── components/         → UI components like `ChatInput`, `ChatMessage`
├── lib/                → API functions
├── types/              → Shared TypeScript interfaces (e.g., ChatMessage)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd multi-agent-orchestra
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## ⚙️ Configuration

The frontend sends prompts to a backend API (e.g., FastAPI). Update the API endpoint inside:

```
src/lib/api.ts
```

```ts
const response = await fetch("http://localhost:8000/chat", {
  ...
});
```

---

## 📦 Planned Features

- 🔁 Streaming responses (SSE)
- ✅ Manual LLM selection override
- 🔍 View source documents (RAG UI)
- 🧠 Memory/history context
- 🔐 Auth + session handling

---

## 🤝 Backend

The backend should expose a `/chat` POST endpoint that takes:

```json
{
  "messages": [
    { "role": "user", "content": "Hello" }
  ]
}
```

And returns:

```json
{
  "response": "Hi there! How can I help you?"
}
```

We’ll integrate this with a FastAPI server using LangChain, Vector DB, and dynamic LLM routing.

---

## 📄 License

MIT License
