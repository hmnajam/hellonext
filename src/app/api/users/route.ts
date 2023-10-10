import {db} from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {

    const client = await db.connect();
    
    const res = await client.query('SELECT * FROM user');

    return NextResponse.json(res)
}