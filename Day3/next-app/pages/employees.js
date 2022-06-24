import Head from 'next/head';

import DataTable from '../components/common/DataTable';

import { getAllEmployees } from '../data-access/emp-repo';

export default function Employees(props) {
    return (
        <>
            <Head>
                <title>Employees Page</title>
                <meta name="description" content="Created by Synechron Team" />
            </Head>

            <div className='text-center'>
                <h1 className="text-primary">Employees Page</h1>

                <>
                    <DataTable items={props.employees}>
                        <h5 className="text-primary text-uppercase font-weight-bold">Employees Table</h5>
                    </DataTable>
                </>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const employees = await getAllEmployees();
    return {
        props: {
            employees
        }
    }
}