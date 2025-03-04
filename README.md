# Next.js Project Setup Guide

## Overview

This guide will help you set up and run the **Next.js** web app locally. Follow the instructions below to get the app running on your machine.

## Prerequisites

Before setting up the project, ensure that you have the following installed:

- **Node.js** (version 14 or later) – [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** – [Download Git](https://git-scm.com/)

## Step 1: Clone the Repository

Start by cloning the repository to your local machine using Git.

```bash
# Clone the repository
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
```

This will download the project files to your local machine.

## Step 2: Install Dependencies

After cloning the repository, navigate to the web-app folder and install the required dependencies using npm.

```bash
# Navigate to the web-app folder
cd web-app

# Install dependencies for the Next.js project
npm install
```

This will install all necessary dependencies for the Next.js web app.

## Step 3: Set Up Environment Variables

### Registering for API Key

To fetch cryptocurrency data, you will need an API key from **CoinGecko**. Follow these steps to obtain your API key:

1. **Go to the CoinGecko API website**:

   - Visit [CoinGecko API](https://www.coingecko.com/en/api) to access their API documentation and services.

2. **Sign Up and Create an Account**:

   - If you don't have an account, click on **"Sign Up"** to create one. Otherwise, log in to your existing account.

3. **Generate an API Key**:

   - After logging in, go to the [API section](https://www.coingecko.com/en/api) in your account dashboard.
   - Follow the instructions on the page to generate a new API key.
   - Copy the generated API key.

4. **Add API Key to Environment Variables**:

   - In the root folder of your project, create or edit the `.env.local` file.
   - Add the following line to store your CoinGecko API key:

     ```env
     # Add your CoinGecko API key here
     NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
     ```

   Replace `your_api_key_here` with the API key you obtained from CoinGecko.

## Step 4: Run the Project Locally

Once the dependencies are installed and the environment variables are set up, you can start the Next.js development server:

```bash
# Run the Next.js web app
npm run dev

```

By default, this will start the app at http://localhost:3000. Open this URL in your browser to view the app.
