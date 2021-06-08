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
        newMessage: '',    // Milestone 3
        searchText: ''
    },

    /* Milestone 2 */
    methods: {
        changeContact(index) {
            this.currentContact = index;
        },

        /* Milestone 3 */
        sendMessage() {
            this.contacts[this.currentContact].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'), /* new Date().toLocaleString('it') */
                status: 'sent',
                text: this.newMessage

            })

            this.messageReply()

        },
        messageReply() {
            setTimeout(() => {
                this.contacts[this.currentContact].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'), /* new Date().toLocaleString('it') */
                    status: 'received',
                    text: 'ok bro!'
                })
            }, 1000)
        },
        /* Milestone 4 */
        searchContact(searchString) {

            console.log(searchString);
            const results = []
            //loop over the list of contacts
            this.contacts.forEach(contact => {
                const contactName = contact.name.toLowerCase();
                //check if the contact name includes the the search string
                console.log(contactName.includes(searchString.toLowerCase()), contactName)
                if (contactName.includes(searchString.toLowerCase())) {
                    // if it contains the search string show the contact
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
                return contact
            })

        }
    }


});

