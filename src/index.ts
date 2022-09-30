import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { context } from "./context";
import { UserResovler } from "./resolvers/UserResolver";
require('dotenv').config()

const app = async () => {
	const schema = await buildSchema({ resolvers: [UserResovler] });

	new ApolloServer({ schema, context }).listen({ port: process.env.PORT }, () =>
		console.log(`Server is running on port ${process.env.PORT} 🚀`)
	);
};

app();
