import GroupedOrders from "../components/grouped-orders";

export default function OrdersPage() {
  return (
    <main>
      <div className="flex flex-col space-y-6 rounded-2xl border border-muted-foreground bg-secondary p-6">
        <div>
          <h1 className="text-3xl font-bold">Orders History</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your account security and devices.
          </p>
        </div>
        <GroupedOrders />
      </div>
    </main>
  );
}
