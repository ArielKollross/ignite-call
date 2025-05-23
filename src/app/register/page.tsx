"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserRegisterFormSchema = z.object({
	username: z
		.string()
		.min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
		.max(20, "O nome de usuário deve ter no máximo 20 caracteres")
		.trim()
		.regex(
			/^[a-zA-Z0-9_]+$/,
			"O nome de usuário deve conter apenas letras, números e sublinhados",
		)
		.transform((value) => value.toLowerCase()),
	name: z
		.string()
		.min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
		.max(45, "O nome de usuário deve ter no máximo 45 caracteres")
		.trim(),
});

type UserRegisterFormSchema = z.infer<typeof UserRegisterFormSchema>;

export default function RegisterPage() {
	const form = useForm<z.infer<typeof UserRegisterFormSchema>>({
		resolver: zodResolver(UserRegisterFormSchema),
		defaultValues: {
			username: "",
			name: "",
		},
	});

	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const username = searchParams.get("username");
		if (username) {
			form.setValue("username", username);
		}
	}, [searchParams, form]);

	async function handleRegister(data: UserRegisterFormSchema) {
		try {
			await api.post("/users", {
				username: data.username,
				name: data.name,
			});

			await router.push("/register/connect-calendar");
		} catch (error) {
			console.error("Error registering user:", error);
			if (error instanceof AxiosError && error.response?.status === 400) {
				form.setError("username", {
					type: "manual",
					message: "Nome de usuário já existe",
				});
			} else {
				alert("Erro ao registrar usuário. Tente novamente mais tarde.");
			}
		}
	}

	return (
		<div className="flex flex-col items-center h-screen">
			<div className="w-full max-w-[34rem] mt-50">
				<h1 className="text-3xl font-bold text-white">
					Bem-vindo ao Ignite Call!
				</h1>
				<p className="mt-2 text-gray-400">
					Precisamos de algumas informações para criar seu perfil! Ah, você pode
					editar essas informações depois.
				</p>

				<div className="flex w-full mt-4 justify-end text-bold">1/4</div>

				<Card className="w-full p-4 mt-8">
					<Form {...form}>
						<form
							className="flex flex-col gap-4"
							onSubmit={form.handleSubmit(handleRegister)}
						>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-300">
											Nome de usuário
										</FormLabel>
										<FormControl>
											<Input
												placeholder="Digite seu nome de usuário"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-300">Nome</FormLabel>
										<FormControl>
											<Input placeholder="Digite seu nome" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="mt-3"
								disabled={form.formState.isSubmitting}
							>
								Próximo Passo
								<ArrowRight className="ml-2" />
							</Button>
						</form>
					</Form>
				</Card>
			</div>
		</div>
	);
}
