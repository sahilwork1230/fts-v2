function selectTicket(ticketType) {
            // Remove selected class from all cards
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            document.querySelector(`[data-ticket="${ticketType}"]`).classList.add('selected');
            
            // Update the select dropdown
            document.getElementById('ticketType').value = ticketType;
            
            // Show payment note for paid tickets
            const paymentNote = document.getElementById('paymentNote');
            if (ticketType !== 'free') {
                paymentNote.style.display = 'block';
            } else {
                paymentNote.style.display = 'none';
            }
        }
        
        // Show payment note on dropdown change
        document.getElementById('ticketType').addEventListener('change', function() {
            const paymentNote = document.getElementById('paymentNote');
            if (this.value !== 'free' && this.value !== '') {
                paymentNote.style.display = 'block';
            } else {
                paymentNote.style.display = 'none';
            }
            
            // Highlight the corresponding card
            if (this.value) {
                selectTicket(this.value);
            }
        });