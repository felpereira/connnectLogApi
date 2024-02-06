import { useMemo } from "react";
import { Events } from "../types/types";

export const useLogSender = (initialRouteUrl: string) => {
  const routeUrl = useMemo(() => initialRouteUrl, []);

  const sendLog = async (log: Events) => {
    try {
      const response = await fetch(routeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: log.message,
          logLevel: log.logLevel,
          timestamp: new Date(),
          secret: log.secret,
        }),
      });

      if (!response.ok) {
        throw new Error("Error in the request");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const receiveLogsBySecret = async (secret: string) => {
    try {
      const resposta = await fetch(`${routeUrl}?secret=${secret}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resposta.ok) {
        throw new Error("Error in the request");
      }

      return (await resposta.json()) as Events[];
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { sendLog, receiveLogsBySecret };
};
