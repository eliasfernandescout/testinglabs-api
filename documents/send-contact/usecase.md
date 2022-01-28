# Criar contatos da quiz no banco de dados;
  
## Dados:
* _id?: string;
  firstname: string;
  lastname?: string;
  phone?: string;
  tags: string[];
  list: string;
  email: string;

## Fluxo primário
1. Ao clicar em enviar contato para o banco de dados este também deverá ser enviado para ActivyCampaign


## Fluxo Alternativo: Contato já existe
1. 

## Fluxo de exceção: Contato já existe
1. 


// const apiData = buscar API banco de dados com id

// if (apiData.type === "mautic") sendToMautic(info)
// if (apiData.type === "active") senToActive(info)
