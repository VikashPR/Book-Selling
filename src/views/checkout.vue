<template>
    <main>
        <v-card class="card__receiver-info">
            <div class="card-title"><span>1 </span>Delivery Details</div>
            <v-form @submit.prevent="orderData">
                <v-col>
                    <v-row cols="12" sm="6">
                        <v-text-field outlined label="First Name*" v-model="firstName" required
                            prepend-inner-icon="mdi-account-box-outline">
                        </v-text-field>
                        <v-text-field outlined label="Last Name*" v-model="lastName" required
                            prepend-inner-icon="mdi-account-box-multiple-outline">
                        </v-text-field>
                        <v-text-field outlined label="VAT/TAX*" required v-model="vat"
                            prepend-inner-icon="mdi-cash-multiple">
                        </v-text-field>
                    </v-row>

                    <v-row cols="12" sm="6">
                        <v-text-field outlined label="Mobile (Optional)" prepend-inner-icon="mdi-phone"
                            v-model="mobile"></v-text-field>
                        <v-text-field outlined label="Email (Optional)" v-model="email"
                            prepend-inner-icon="mdi-email-outline">
                        </v-text-field>
                        <v-text-field outlined label="Company (Optional)" v-model="company"
                            prepend-inner-icon="mdi-domain">
                        </v-text-field>
                    </v-row>

                    <v-row cols="12" sm="6">
                        <v-text-field outlined label="Address Line 1*" required v-model="address1"
                            prepend-inner-icon="mdi-book-marker-outline">
                        </v-text-field>
                        <v-text-field outlined label="Address Line 2*" required v-model="address2"
                            prepend-inner-icon="mdi-book-marker-outline">
                        </v-text-field>
                    </v-row>

                    <v-row cols="12" sm="6">
                        <v-text-field outlined label="Address Line 3*" v-model="address3" required
                            prepend-inner-icon="mdi-book-marker-outline">
                        </v-text-field>
                        <v-text-field outlined v-model="address4" label="Address Line 4 (Optional)"
                            prepend-inner-icon="mdi-book-marker-outline">
                        </v-text-field>
                    </v-row>

                    <v-row cols="12" sm="6">
                        <v-text-field outlined v-model="zipcode" label="Zip Code/Postal Code (Optional)"
                            prepend-inner-icon="mdi-post-outline">
                        </v-text-field>
                    </v-row>
                </v-col>
                <v-btn color="#d23f57" class="btn btn__next">Next <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-form>
            <div class="card-title"><span>2 </span>Payment Details</div>
            <v-container fluid class="payment-info">
                <v-radio-group v-model="radios">
                    <template v-slot:label>
                        <div>Your Preferred <strong>Pay Mode</strong></div>
                    </template>
                    <v-radio value="online">
                        <template v-slot:label>
                            <div>
                                Online <strong class="success--text">UPI/Net Banking</strong>
                            </div>
                        </template>
                    </v-radio>
                    <v-radio value="bankTransfer">
                        <template v-slot:label>
                            <div>
                                Bank
                                <strong class="primary--text">Bank Account</strong>
                            </div>
                        </template>
                    </v-radio>
                    <v-radio value="bankDeposit">
                        <template v-slot:label>
                            <div>
                                Bank
                                <strong class="amber--text">Bank Deposit</strong>
                            </div>
                        </template>
                    </v-radio>
                    <v-radio value="cash">
                        <template v-slot:label>
                            <div>
                                Cash <strong class="deep-orange--text">Cash Payment</strong>
                            </div>
                        </template>
                    </v-radio>
                </v-radio-group>
                <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="#d23f57" class="btn btn__submit" v-bind="attrs" v-on="on">Done <v-icon>
                        mdi-check-circle-outline</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="text-h5">
                    Your order is placed successfully !
                </v-card-title>
                <v-card-text>Click Agree to continue shopping</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">
                        Disagree
                    </v-btn>
                    <router-link to="/products" tag="button">
                        <v-btn color="green darken-1"  text @click="dialog = false">
                        Agree
                    </v-btn>
                    </router-link>
                    
                </v-card-actions>
            </v-card>
        </v-dialog>
            </v-container>
        </v-card>

        <div class="order-details">
            <div class="card-title"><span>3 </span>Order Details</div>
            <v-simple-table class="table__order-details">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cartItems" :key="item.name">
                            <td>{{ item.quantity }} x {{ item.name }}</td>
                            <td>$ {{ item.price }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
            <v-divider></v-divider>
            <ul>
                <li>Subtotal: <strong>$2806</strong></li>
                <li>Shipped: <strong>$2806</strong></li>
                <li>Tax: <strong>$2806</strong></li>
                <li>Discount: <strong>$2806</strong></li>
            </ul>
            <v-divider></v-divider>
            <div class="total">Total: <strong>$2806</strong></div>
        </div>
    </main>
</template>
<!-- ANCHOR[id=my-anchor]  Hey Wsaupp -->
<script>
    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
                vat: "",
                mobile: "",
                email: "",
                company: "",
                address1: "",
                address2: "",
                address3: "",
                address4: "",
                zipcode: "",
                radios: "online",
                dialog: false
            };
        }
    }
</script>

<style lang="scss" scoped>
    main {
        display: flex;
        justify-content: space-between;
        min-height: 90vh;
        margin: 50px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 10px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }

    // Alert
    .alert {
        position: absolute;
    }

    .total {
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }

    .card__receiver-info {
        padding: 30px;
        width: 100%;
        max-width: 900px;
        margin-inline-end: 20px;
    }

    .order-details {
        width: 40%;
    }

    .card-title {
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        margin: 10px;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            height: 40px;
            width: 40px;
            color: #fff;
            margin-inline-end: 10px;
            border-radius: 50%;
            background-color: #d23f57;
        }
    }

    .v-text-field {
        margin: 10px;
    }

    .v-form {
        display: flex;
        flex-direction: column;
    }

    .btn {
        width: 100%;
        max-width: 150px;
        align-self: flex-end;
    }

    .btn__next {
        margin-inline-end: 20px;
        color: #fff;
    }

    .btn__submit {
        color: #fff;
    }

    .payment-info {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media screen and (max-width: 800px) {
        main {
            flex-direction: column;
        }

        .card__receiver-info {
            width: 100%;
        }

        .order-details {
            width: 100%;
        }
    }
</style>