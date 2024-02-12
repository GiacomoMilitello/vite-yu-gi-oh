import { reactive } from 'vue'

export const store = reactive({
    searchText: "",
    loading: false,
    cardsList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cardsArchetype: [],
    apiArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    selectValue: 'all',
});