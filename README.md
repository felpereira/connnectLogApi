WIP
---

**Project Title: Log Management Utility**

**Overview:**

The Log Management Utility is a TypeScript and React-based tool designed to facilitate the sending and retrieval of logs within a web application. It provides a custom hook, `useLogSender`, which encapsulates the logic for sending logs to a specified endpoint and retrieving logs based on a secret key.

**Features:**

1. **useLogSender Hook:**
   - Initializes with a provided initial route URL for log interactions.
   - Includes functions for sending logs (`sendLog`) and retrieving logs by a secret key (`receiveLogsBySecret`).
   - Integrates with the `fetch` API to handle asynchronous communication with the server.

2. **Send Log:**
   - Sends log data, including message, log level, timestamp, and a secret key, to the specified endpoint using a POST request.
   - Implements error handling to manage unsuccessful requests.

3. **Receive Logs by Secret:**
   - Retrieves logs from the server based on a secret key using a GET request.
   - Includes error handling for unsuccessful requests.

**Usage:**

```typescript
import { useLogSender } from './path-to-file';

const initialRoute = "http://localhost:3000/log";
const { sendLog, receiveLogsBySecret, routeUrl } = useLogSender(initialRoute);

// Example usage:
sendLog({ message: "Log message", logLevel: "info", timestamp: new Date(), secret: "your-secret-key" });

const logs = await receiveLogsBySecret("your-secret-key");
console.log(logs);
```

**Note:**
- The tool is designed for projects that involve logging but do not necessarily have a visual interface.
- The code follows TypeScript best practices and incorporates error-handling mechanisms.
- The utility promotes clean and modular code, emphasizing the separation of concerns.

Feel free to customize and integrate this Log Management Utility into your project to enhance and streamline log-related functionalities.
