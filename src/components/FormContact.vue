<template>
  <form ref="formEmail" @submit.prevent="sendEmail()">
    <div class="d-flex flex-column my-4">
      <label class="white--text font-weight-semibold" for="user_name">{{
        "Nome" | textUpperCase()
      }}</label>
      <v-text-field
        solo
        dense
        single-line
        hide-details
        id="user_name"
        name="user_name"
        ref="user_name"
        v-model.trim="form.user_name"
      ></v-text-field>
    </div>
    <div class="d-flex flex-column my-4">
      <label class="white--text font-weight-semibold" for="user_email"
        >{{ "email" | textUpperCase() }} <span class="red--text">*</span></label
      >
      <v-text-field
        solo
        dense
        single-line
        type="email"
        id="user_email"
        name="user_email"
        ref="user_email"
        v-model.trim="form.user_email"
        data-vv-as="email"
        persistent-hint
        :hint="errors.first('user_email')"
        :error="errors.collect('user_email').length ? true : false"
        v-validate="'required|email'"
        data-vv-validate-on="change"
      ></v-text-field>
    </div>
    <div class="d-flex flex-column my-4">
      <label class="white--text font-weight-semibold" for="message"
        >{{ "Mensagem" | textUpperCase() }}
        <span class="red--text">*</span></label
      >
      <v-textarea
        solo
        dense
        single-line
        type="text"
        id="message"
        name="message"
        ref="message"
        v-model.trim="form.message"
        data-vv-as="mensagem"
        persistent-hint
        :hint="errors.first('message')"
        :error="errors.collect('message').length ? true : false"
        v-validate="'required|min:10'"
        data-vv-validate-on="change"
      ></v-textarea>

      <v-btn
        class="my-8"
        dark
        :rounded="false"
        :loading="loadingButtonContact"
        :disabled="loadingButtonContact"
        color="info"
        type="submit"
      >
        Enviar
        <template v-slot:loader>
          <span class="custom-loader">
            <v-icon color="white" dark>mdi-cached</v-icon>
          </span>
        </template>
      </v-btn>
    </div>
    <Alert
      :text="alert.text"
      :typeAlert="alert.type"
      :show="alert.show"
      @invisible="alert.show = false"
    />
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import Alert from "./Alert.vue";

import config from "../config";

export default {
  name: "FormContact",
  components: {
    Alert,
  },
  data() {
    return {
      loadingButtonContact: false,
      form: {
        user_name: "",
        user_email: "",
        message: "",
      },
      alert: {
        text: "",
        type: "info",
        show: false,
      },
    };
  },
  methods: {
    async sendEmail() {
      const resultValidate = await this.$validator.validateAll();

      if (!resultValidate) return;
      this.loadingButtonContact = true;

      let typeAlert = "";
      let textAlert = "";
      try {
        const result = await emailjs.sendForm(
          config.EMAIL_SERVICE_ID,
          config.EMAIL_TEMPLATE_ID,
          this.$refs.formEmail,
          config.EMAIL_PUBLIC_KEY
        );

        typeAlert = result.status === 200 ? "success" : "error";
        textAlert =
          result.status === 200
            ? "E-mail enviado com sucesso."
            : "Houve um erro ao enviar o e-mail, tente mais tarde.";
      } catch (error) {
        if (error.status === 400) {
          typeAlert = "error";
          textAlert = "Houve um erro ao enviar o e-mail, tente mais tarde.";
        }
      }

      this.alert.text = textAlert;
      this.alert.type = typeAlert;
      this.alert.show = true;

      this.loadingButtonContact = false;

      this.form.user_name = "";
      this.form.user_email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
/* css do botão de contatos */
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
