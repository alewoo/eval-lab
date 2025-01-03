import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExperimentList } from "@/components/experiment-list";

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Experiments</h1>
        <Link href="/experiments/new">
          <Button>Create New Experiment</Button>
        </Link>
      </div>
      <ExperimentList />
    </div>
  );
}
