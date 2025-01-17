export function ErrorMessages({
  messages,
}: {
  messages: Array<string> | undefined;
}) {
  if (!messages) return null;
  return (
    <ul className="text-xs text-destructive">
      {messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
}
