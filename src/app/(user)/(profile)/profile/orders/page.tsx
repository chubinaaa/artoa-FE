import GroupedOrders from "../components/grouped-orders";

export default function OrdersPage() {
  return (
    <main>
      <div className="flex flex-col space-y-6 bg-background p-6 lg:rounded-2xl lg:border lg:border-muted-foreground lg:bg-secondary">
        <div>
          <h1 className="hidden text-3xl font-bold lg:flex lg:flex-row">
            Orders History
          </h1>
          <p className="mt-2 hidden text-sm text-muted-foreground lg:flex lg:flex-row">
            Manage your account security and devices.
          </p>
        </div>
        <GroupedOrders />
      </div>
    </main>
  );
}
