"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function ConnectCalendar() {
	return (
		<div className="flex flex-col items-center h-screen">
			<div className="w-full max-w-[34rem] mt-50">
				<h1 className="text-3xl font-bold text-white">Conecte sua agenda!</h1>
				<p className="mt-2 text-gray-400">
					Conecte o seu calendário para verificar automaticamente as horas
					ocupadas e os novos eventos à medida em que são agendados.
				</p>

				<div className="flex w-full mt-4 justify-end text-bold">2/4</div>

				<Card className="w-full p-4 mt-8">
					<div className="flex items-center justify-between flex-row gap-4">
						<p className="text-gray-300">Google Agenda</p>
						<Button variant="outline">
							Conectar
							<ArrowRight className="ml-2" />
						</Button>
					</div>

					<Button className="w-full mt-4">
						Próximo Passo
						<ArrowRight className="ml-2" />
					</Button>
				</Card>
			</div>
		</div>
	);
}
