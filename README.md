# **ViBoot Starter:** Your Speedy Bootstrap Journey 🚀

A streamlined Vite + Bootstrap starter kit to kickstart your web projects with style and efficiency.

## How to Get Started:

### 1. Clone the Repository:

   - **Direct Download:** Grab the project files directly from the repository.
   - **Git:** Clone the repository to your local machine:
     ```bash
     git clone https://github.com/your-username/ViBoot-starter.git
     ```

### 2. Install Dependencies:

   Ensure you have Corepack enabled:
   ```bash
   corepack enable
   ```

   Then, install the required packages:
   ```bash
   yarn install
   ```

### 3. Develop Locally:

   Start the development server:
   ```bash
   yarn dev
   ```

   Your project will be accessible at `http://localhost:5173/`.

## Creating New Pages:

### 1. Create the HTML File:

   Create a new HTML file within the `src/pages` directory. For example, to create a product list page:
   ```
   src/pages/products.html
   ```

### 2. Configure Vite:

   Update the `vite.config.ts` file to include your new page:
   ```typescript
   import { createMpaPlugin } from 'vite-plugin-mpa';

   export default defineConfig({
     plugins: [
       createMpaPlugin({
         // ... other configurations
         pages: [
           // ... existing pages
           {
             name: 'products',
             entry: '/src/pages/products.html',
           },
         ],
       }),
     ],
   });
   ```

## Enjoy the Development Process!

With ViBoot-starter, you can quickly set up new web projects and focus on building amazing features. 
Let's create something awesome together! 
