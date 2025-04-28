import type { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
	const { name, username } = await request.json();

	const existingUser = await prisma.user.findUnique({
		where: {
			username,
		},
	});

	if (existingUser) {
		return new Response(JSON.stringify({ error: "Username already exists" }), {
			status: 400,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const user = await prisma.user.create({
		data: {
			name,
			username,
		},
	});

	const cookieStore = await cookies();
	cookieStore.set("@ignitecall:userId", user.id, {
		expires: new Date(Date.now() + 60 * 60 * 24 * 7), // 7 days
	});

	return new Response(JSON.stringify({ user }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
}
