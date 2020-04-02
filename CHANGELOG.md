# React-Controls (version: 0.1.264 )

## Background Info

We are working on a new version of react-controls 

## Main changes

- UpPassword
- UpInput 
- UpNotification
- UpButton (style update when dropDown === 'down')
- UpTogglen (style update)
- UpDate (style update)
- UpDataGrid
- UpCheckbox (style update)
- UpLoadingIndicator (style update)


## Components
 - UpPassword new props : 
    - ``rules?:array`` array of objects with the text and and a regex expression
```
const rules = [
    { text: 'Au moins 8 caractères', regex: /^.{8,}$/ },
    { text: 'Au moins une majuscule', regex: /.*[A-Z]/ },
    { text: 'Au moins une minuscule', regex: /.*[a-z]/ },
    { text: 'Au moins 1 chiffre', regex: /.*[0-9].*/ }
  ]
  const rulesAreValid = rulesMatch(value,rules) // function impoted from utils

  <UpPassword
      value={value}
      onChange={(e, v) => setValue(v)}
      showPasswordOnClick={false}
      rules={rules}
      onFocus={(e)=>{
        setFocused(true)
        setTouched(true)
      }}
      onBlur={(e)=> setFocused(false)}
      focused={focused}
      showError={touched && !rulesAreValid}
      hasError={touched && !rulesAreValid}
      touched={touched}
    />
```
 - UpInput new props :
    - ``hasClearOption ?:boolean`` a bolean to show a an icon to clear the input value
    - ``onClear?:function``  fuction to clear the input value if you use the input as a controlledInput

 ```
 const ControlledSeacrhInput = props => {
  const [value,setValue] = React.useState('')
  const [isLoading,setIsLoading] = React.useState(false);
  
  return (
    <UpInput
      type='search' 
      value={value} 
      onChange={(event,value)=>{
        setIsLoading(true)
        setValue(value)
        setTimeout(() => {
          setIsLoading(false)
        }, 2000);
      }} 
      onClear={()=>setValue('')} 
      placeholder='placeholder ...'   
      iconPosition={'left'} 
      hasClearOption
      isLoading={isLoading}
     />
  )
}
```

- UpNotification new props : 
    - ``duration?:number ``the duration in seconds of the notification before it disappear 
    - ``withCancelIcon?:boolean`` a boolean to add the possibility to cancel a notification


```
<UpNotification 
    intent="success" 
    duration={6} 
    withCancelIcon={boolean('showCancelIcon',true)}
>
    <p>Votre opération a été enregistré avec succès !</p>
</UpNotification>

```

 - UpDataGrid new props : 
    - ``displayRowActionsWithinCell?:boolean`` a bolean to diplay the actions in the first cell  
    - ``rowActions?:array`` array of actions (it replaces the  `actions` props in the previous version)
    - ``footerProps?:objectOf`` : 
        - `isPaginationEnabled?:boolean` a props to display the pagination in the footer
        - `actionsButtonText?:string` the text of the button that group all the actions
        - `showActionsButtonsText?:boolean` a props to display the button that group all the actions
        - `validationButtonText?:string` the text of the validation button
    - ``headerProps?:objectOf``: 
        - `title:?string` : title of the DataGrid
        - `buttons:?ReactElement`: it could be anything you want to diplay on the right of the header

```
 <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        displayRowActionsWithinCell={true}
        isSelectionEnabled={true}
        onSelectionChange={(a, b) => {
          console.log(a, b);
        }}
        
        className={style({
          $nest: {
            "&.up-data-grid-container .up-pagination-nav li a": {
              border: 0,
              fontSize: "10pt"
            },
            "&.up-data-grid-container .up-pagination-result-message": {
              border: 0,
              color: "black",
              fontSize: "10pt"
            },
            "& .up-pagination-takes": {
              display: "none"
            },
            "& .up-pagination-page a": {
              textDecoration: "underline",
              color: "black",
              minWidth: "auto",
              padding: "4px"
            },
            "& .up-pagination-page:hover a, & .up-pagination-page.active:hover a, & .up-pagination-page:hover span": {
              background: "transparent",
              color: UpDefaultTheme.colorMap.primary
            },
            "& .up-pagination-page.disabled a": {
              textDecoration: "none"
            },
            "& .up-pagination-page.disabled:hover a, & .up-pagination-page.disabled:hover span": {
              color: UpDefaultTheme.colorMap.disabledFg
            },
            "& .up-pagination-page.active a": {
              background: "transparent",
              color: UpDefaultTheme.colorMap.primary
            },
            "& .up-row-flex": {
              textAlign: "end",
              flexDirection: "row-reverse"
            }
          }
        })}
        paginationProps={{
          paginationNavigationSeparator: "...",
          previousLabel: "Précédent",
          nextLabel: "Suivant",
          renderResultMessage: (
            theme: UpThemeInterface,
            from: number,
            to: number,
            total: number
          ) => (
            <span
              className={classnames(
                "up-pagination-result-message",
                paginationCounterStyle({ theme })
              )}
            >
              {total == 0 && <span>Aucun résultat</span>}
              {total != 0 && (
                <span>
                  <span>R&eacute;sultat(s)&nbsp;</span>
                  <span>{from}</span>
                  <span> &agrave; </span>
                  <span>{to}</span>
                  <span> sur </span>
                  <span>{total}</span>
                </span>
              )}
            </span>
          )
        }}
        rowActions={[
          {
            action: (values) => {
              console.log(values)
            },
            type: "add",
            description: "Ajouter un lien"
          },
          {
            action: () => {},
            type: "edit",
            description: "Modifier"
          },
          {
            action: () => {},
            type: "delete",
            description: "Supprimer"
          }
        ]}
       
        paginationPosition="bottom"
        isPaginationEnabled={true}
        columns={[
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
        footerProps={{
          isPaginationEnabled: true,
          actionsButtonText: 'Groupe actions',
          showActionsButtons: true,
          validationButtonText: 'Validate'
        }}
        headerProps={{
          title: 'Titre du tableau',
          buttons: <><UpButton intent='secondary'>Bouton 1</UpButton><UpButton intent='secondary'>Bouton 2</UpButton></>
        }}
      />
```



