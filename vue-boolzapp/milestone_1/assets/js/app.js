const app = new Vue({
    el: '#app',
    data: {
        currentContact: 0,
        me: {
            name: 'Me',
            avatar: '_me',
            visible: true
        },
        // contacts[0].messages -> v-for="message in contacts[0].messages"
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessage: '',
        searchString: ''

    },

    methods: {
        /* Milestone 2 */

        changeContact(index) {
            this.currentContact = index;
            //console.log(index, 'hai cliccato su questo utente');
        },
        addMessage() {
            //console.log(this.newMessage);
            //console.log(this.contacts[this.currentContact].messages)

            this.contacts[this.currentContact].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: 'sent'
            });
            this.newMessage = '';
            // ricevi risposta automatica
            this.reply();

            const messages = document.querySelector('.messages')
            console.log(messages.scrollTop, messages.scrollHeight);


        },
        /**
         * Produce risposta automatica dopo 1 s
         */
        reply() {
            setTimeout(() => {
                this.contacts[this.currentContact].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'OK 👍',
                    status: 'received'
                });
            }, 1000)
        },
        /* Milestone 4 - Search contact */
        searchContact(search) {
            const searchLower = search.toLowerCase();
            //console.log(searchLower);

            this.contacts.forEach((contact) => {
                const nameLower = contact.name.toLowerCase();
                //console.log(nameLower.includes(searchLower), nameLower);
                if (nameLower.includes(searchLower)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
                return contact

            });
        }
    }
});



/*
- @keyup
- v-model
- metodo searchContact()
    - includes() 'sdfkosdfk'.includes('sd')
    - loop forEach
    - condizionale if
*/