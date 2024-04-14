<template>
    <v-form @submit.prevent>
        <v-card class="mx-auto" max-width="500" title="Inserir Tarefa">
            <v-container>
                <v-text-field :rules="ruleText" v-model="list.titulo" color="primary" label="Título"
                    variant="underlined"></v-text-field>

                <v-text-field v-model="list.descricao" color="primary" label="Descrição" variant="underlined"></v-text-field>

                <v-text-field v-model="list.data" color="primary" label="Data" variant="underlined" type="date"></v-text-field>

                <v-select v-model="list.status" :items="['Pendente', 'Realizado']" color="primary" label="Status" variant="underlined"></v-select>

                <v-text-field v-model="list.responsavel" color="primary" label="Responsável"
                    variant="underlined"
                   >
                </v-text-field>
            </v-container>
            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="save()" color="success" type="submit" :disabled="disable">
                    Salvar
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>
                
            </v-card-actions>
        </v-card>
        <v-snackbar v-model="sucessMessage" color="success" timeout="3000" location="button">
            Tarefa salva com sucesso!
        </v-snackbar>
    </v-form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app.js'

const list = ref({
    titulo: '',
    descricao: '',
    data: '',
    status: '',
    responsavel: ''
})
const sucessMessage = ref(false)
const store = useAppStore()


const save = () => {
    store.addList(list.value)

    clearFormAndShowSuccessMessage()
}

const clearFormAndShowSuccessMessage = () => {
    list.value = {
        titulo: '',
        descricao: '',
        data: '',
        status: '',
        responsavel: ''
    }

    sucessMessage.value = true
}

const ruleText = [
    (v) => !!v || 'Campo obrigatório',
    (v) => (v && v.length >= 3) || 'Mínimo de 3 caracteres',
]

const disable = computed(() => {
    return !list.value.titulo || !list.value.descricao || !list.value.data || !list.value.status || !list.value.responsavel;
})
</script>