<!-- eslint-disable vue/multi-word-component-names -->
<template>
    
    <v-dialog v-model="dialogEditar" max-width="500px">
        <v-card>
            <v-card-title>Editar Tarefa</v-card-title>
            <v-container>
                <v-text-field :rules="ruleText" v-model="listEdit.titulo" color="primary" label="Título"
                    variant="underlined"></v-text-field>
                <v-text-field v-model="listEdit.descricao" color="primary" label="Descrição" variant="underlined"></v-text-field>
                <v-text-field v-model="listEdit.data" color="primary" label="Data" variant="underlined" type="date"></v-text-field>
                <v-select v-model="listEdit.status" :items="['Pendente', 'Realizado']" color="primary" label="Status" variant="underlined"></v-select>
                <v-text-field v-model="listEdit.responsavel" color="primary" label="Responsável"
                    variant="underlined"
                   >
                </v-text-field>
            </v-container>
            <v-card-actions class="d-flex justify-end">
                <v-btn @click="atualizaTarefa()" variant="tonal" color="primary" :disabled="disable">Salvar</v-btn>
                <v-btn @click="cancelarEdit()" variant="tonal" color="error">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-container>
        <v-row>
            <v-col cols="12" md="6" v-for="(item, index) in store.getList" :key="index">
                <v-expand-transition>   
                <v-card>
                    <v-card-title>{{ item.titulo }}</v-card-title>

                    <v-card-subtitle>
                        {{ item.descricao }}
                    </v-card-subtitle>
                    
                        <v-card-text class="pb-0">
                        <p class="text-medium-emphasis">
                            Data: {{ new Date(item.data).toLocaleDateString('pt-br') }}
                        </p>
                        <p class="text-medium-emphasis">
                            Status: {{ item.status }}
                        </p>
                        <p class="text-medium-emphasis">
                            Responsável: {{ item.responsavel }}
                        </p>
                        </v-card-text>

                        <v-card-actions class="pt-0">
                        <v-btn
                            color="teal-accent-4"
                            text="Editar"
                            variant="text"
                            @click="editItem(index)"
                        ></v-btn>
                        <v-btn
                            color="red"
                            text="Excluir"
                            variant="text"
                            @click="deleteItem(index)"
                        ></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-expand-transition>
            </v-col>
        </v-row>
    </v-container>
    <v-snackbar v-model="sucessMessage" color="success" timeout="3000" location="button">
            Tarefa salva com sucesso!
    </v-snackbar>
</template> 

<script setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/stores/app.js'

const store = useAppStore()
const dialogEditar = ref(false);
const listEdit = ref(null);
const sucessMessage = ref(false);
const editItemIndex = ref('');

const editItem = (index) => {
    editItemIndex.value = index;
    listEdit.value = {...store.getList[index]};
    console.log(listEdit.value)
    dialogEditar.value = true;
};

const cancelarEdit = () => {
    dialogEditar.value = false;
}

const atualizaTarefa = () => {
    const updateItem = {...listEdit.value};
    store.updateList({index: editItemIndex.value, list: updateItem});
    cancelarEdit();
    sucessMessage.value = true;
}

const deleteItem = (item) => {
    store.removeList(item.id)
}

const ruleText = [
    (v) => !!v || 'Campo obrigatório',
    (v) => (v && v.length >= 3) || 'Mínimo de 3 caracteres',
]

const disable = computed(() => {
    return !listEdit.value.titulo || !listEdit.value.descricao || !listEdit.value.data || !listEdit.value.status || !listEdit.value.responsavel;
})

</script>