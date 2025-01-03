import { Suspense } from "react";
import { ExperimentSelector } from "@/components/experiment-selector";
import { MetricCards } from "@/components/metric-cards";
import { PerformanceCharts } from "@/components/performance-charts";
import { GradingDistribution } from "@/components/grading-distribution";
import { TestCaseTable } from "@/components/test-case-table";

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Suspense fallback={<div>Loading experiment selector...</div>}>
        <ExperimentSelector />
      </Suspense>

      <Suspense fallback={<div>Loading metric cards...</div>}>
        <MetricCards />
      </Suspense>

      <div className="grid md:grid-cols-2 gap-6">
        <Suspense fallback={<div>Loading performance charts...</div>}>
          <PerformanceCharts />
        </Suspense>

        <Suspense fallback={<div>Loading grading distribution...</div>}>
          <GradingDistribution />
        </Suspense>
      </div>

      <Suspense fallback={<div>Loading test case table...</div>}>
        <TestCaseTable />
      </Suspense>
    </div>
  );
}
