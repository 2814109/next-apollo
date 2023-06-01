import { ApolloWrapper } from "./libs/apollo-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <h1>test!</h1>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}