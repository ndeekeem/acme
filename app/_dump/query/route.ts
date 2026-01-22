import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listinvoices() {
    const data = await sql`
        select invoices.amount, customers.name
        from invoices
        join customers on invoices.customer_id = customers.id
        where invoices.amount = 666;
    `;
    return data;
}

export async function GET() {
    try {
    	return Response.json(await listinvoices());
    } catch (error) {
        console.log(error);
    	return Response.json({ error: String(error) }, { status: 500 });
    }
}
