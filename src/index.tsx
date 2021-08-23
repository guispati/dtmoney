import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelancer de Website',
                    type: 'deposit',
                    category: 'Dev',
                    value: 666,
                    createdAt: new Date('2021-07-13'),
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    value: 100,
                    createdAt: new Date('2021-07-10'),
                }
            ]
        })
    },
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transaction', data);
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
