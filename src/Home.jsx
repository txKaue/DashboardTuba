import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Tablet',
          Vendas: 25,
          Visitas: 78,
          amt: 2400,
        },
        {
          name: 'Celular',
          Vendas: 360,
          Visitas: 1398,
          amt: 2210,
        },
        {
          name: 'Notebook',
          Vendas: 2000,
          Visitas: 9800,
          amt: 2290,
        },
        {
          name: 'Headset',
          Vendas: 2780,
          Visitas: 3908,
          amt: 2000,
        },
        {
          name: 'Mouse',
          Vendas: 1890,
          Visitas: 4800,
          amt: 2181,
        },

      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PODUTOS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIAS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>2</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CLIENTES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>666</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MENSAGENS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>13</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Vendas" fill="#2962ff" />
                <Bar dataKey="Visitas" fill="#b620a9" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Vendas" stroke="#2962ff" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Visitas" stroke="#b620a9" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home