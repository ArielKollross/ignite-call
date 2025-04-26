import { Button } from "@/components/ui/button";
import { ClaimUserNameForm } from "./ClaimUserNameForm";

export function Hero() {
	return (
		<div className="flex flex-col max-w-7xl">
			<div className="w-[30rem]">
				<h1 className="text-white font-extrabold text-6xl/tight text-">
					Agendamento descomplicado
				</h1>
				<p className="text-2xl/relaxed mt-1 text-[#A9A9B2]">
					Conecte seu calendário e permita que as pessoas marquem agendamentos
					no seu tempo livre.
				</p>

				<ClaimUserNameForm />
			</div>
		</div>
	);
}
