import {DefaultDocumentNodeResolver, StructureBuilder, StructureResolver} from 'sanity/desk'
import {LocalClientView} from './components/localClientView'
import { SharedClientView} from '@packages/shared/sharedClientView'

export const structure: StructureResolver = async (S, context) => {
  return S.list()
    .title("Hello World")
    .items([
    S.listItem()
      .title('Food')
      .child(
        S.documentTypeList('food')
          .title('Fooooood')
          .child((documentId) =>
            S.document()
              .documentId(documentId)
              .schemaType('food')
              .views([
                S.view.form().title('Edit your food bro'),
                S.view.component(LocalClientView).title('Try the Local Client'),
                S.view.component(SharedClientView).title('Try the Shared Client'),
              ])
          )
      ),
  ])
}

export const defaultDocumentNodeResolver: DefaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form(), S.view.component(LocalClientView).title('Local Client')])
