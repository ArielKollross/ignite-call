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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ClaimUserNameFormSchema = z.object({
	username: z.string().min(2).max(50),
});

type ClaimUserNameFormSchema = z.infer<typeof ClaimUserNameFormSchema>;

export function ClaimUserNameForm() {
	const form = useForm<z.infer<typeof ClaimUserNameFormSchema>>({
		resolver: zodResolver(ClaimUserNameFormSchema),
		defaultValues: {
			username: "",
		},
	});

	async function onSubmit(data: ClaimUserNameFormSchema) {
		console.log(data.username);
	}

	return (
		<Card className="w-full bg-[#202024] p-4 mt-8">
			<Form {...form}>
				<form
					className="flex flex-col gap-4"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-gray-300">Nome de usuário</FormLabel>
								<FormControl>
									<Input
										className="text-gray-300"
										placeholder="Digite seu nome de usuário"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="bg-[#DB4437] text-white h-12">
						Reservar
						<ArrowRight className="ml-2" />
					</Button>
				</form>
			</Form>
		</Card>
	);
}
