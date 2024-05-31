# SQL-Telegram-Bot

# NS Enlistment Telegram Bot

This project was developed as a proof-of-concept for an NS enlistment bot using Telegram. The bot was designed to assist enlistees by providing them with their enlistment details through a Telegram interface. However, due to security concerns, this project was not integrated into the official NS enlistment system.

## Overview

The Telegram bot interacts with an SQL database to fetch and provide enlistment details to users. It was intended to streamline the process of retrieving enlistment information, making it easily accessible via a chat interface.

## Features

- **Telegram Integration**: Uses the Telegraf library to handle interactions with Telegram.
- **SQL Database**: Connects to a PostgreSQL database to query enlistment details.
- **Express Server**: Hosts the bot's webhook using an Express server.
- **Environment Configuration**: Uses dotenv for managing environment variables.

## Setup

### Prerequisites

- Node.js and npm
- PostgreSQL

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/ns-enlistment-bot.git
   cd ns-enlistment-bot
