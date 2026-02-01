# React + Vite Development Environment

### What's happening here?
This project is a React application built using **Vite**, a high-performance frontend tool.

* **The Environment:** Vite serves as our "bundler." It automates the complex setup required to create a functional React environment (handling things like JSX compilation and file minification).
* **The Setup:** We initialized this project using `npm create vite`, which provides a series of straightforward prompts to define project details.
* **Execution:** To view the project, we navigate into the project folder and run a script that hosts our application on a local development port.

---

### Custom Configurations

I have customized the default Vite behavior in two specific ways:

#### 1. Custom Script Alias
By default, Vite uses `npm run dev`. However, this is simply an alias located in the `package.json` file under the `"scripts"` section. I have renamed this alias for clarity:

| Default Command | My Custom Command |
| :--- | :--- |
| `npm run dev` | `npm run frontEnd` |

> **Note:** You can find this configuration in `package.json`:
> ```json
> "scripts": {
>    "frontEnd": "vite"
> }
> ```

#### 2. Port Configuration
Vite typically runs on port `5173`. To use a specific port, I modified the `vite.config.js` file by adding the server object:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173 // Replace with whatever port you want to use
  }
})
```