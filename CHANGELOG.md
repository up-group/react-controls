# ReactControls (version: 0.2.42)

## Bug Fixes

UpText 
- fix style conflict with UpInput

# ReactControls (version: 0.2.41)

## Main changes

UpText 
- set full border

# ReactControls (version: 0.2.40)

## Main changes

UpNavTab 
- add onSelectedTabChanged handler

# ReactControls (version: 0.2.37)

## Main changes

Improve UpIcon stories
- enable to change color and size

# ReactControls (version: 0.2.36)

## Bug Fixes

Fix setting value in case of using mode returntype "id" UpSelect

# ReactControls (version: 0.2.35)

## Bug Fixes

Fix props autoload for UpSelect

# ReactControls (version: 0.2.33)

## Bug Fixes

Fix props passed to UpPhone and UpEmail

# ReactControls (version: 0.2.32)

## Bug Fixes

Fix UpRadio background color when display as button

# ReactControls (version: 0.2.31)

## Bug Fixes

Fix UpRadio layout in display mode button

# ReactControls (version: 0.2.30)

## Bug Fixes

Fix ok-sign icon
  
# ReactControls (version: 0.2.29)

## Main changes

Export custom hooks :
- useMountedRef : keep mount and unmount reference
- useSafeState : avoid setState after unmount
- useHoverIntent : enable mouse enter and leave logic

# ReactControls (version: 0.2.28)

## Main changes

Add props onClick, onMouseEnter and onMouseLeave for UpBadge

# React-Controls (version: 0.2.26)

## Bug Fixes
Clean UpBadge

# React-Controls (version: 0.2.25)

## Bug Fixes
Fix svg icon notification

# React-Controls (version: 0.2.24)

## Bug Fixes
Fix icon color when UpButon is disabled

# React-Controls (version: 0.2.23)

## Main changes
- Add new component UpPicture

# React-Controls (version: 0.2.22)

## Bug Fixes
- Fix floating label prop on UpNumber

## Main changes
- Add new prop to UpDataGrid in order to customize the style of a row

# React-Controls (version: 0.2.21)

## Main changes
- Add new prop to UpDataGrid in order to customize the style of a row

# React-Controls (version: 0.2.20)

## Main changes
- Add new prop to UpNotification to define the duration of the animation

# React-Controls (version: 0.2.19)

## Main changes
- Add new props disabled to UpCheckbox

## Bug Fixes
- Fix icon position for UpPaswword with floating label
- In case of using the floating label, the select get now the focus when click on the label

# React-Controls (version: 0.2.16)

## Main changes

- Add floating label to UpSelect
- Improve animation UpNavTab

## Bug Fixes

- Validation phone number of UpPhone

# React-Controls (version: 0.2.13)

## Main changes

- UpCarousel
- Add new props className to UpButton 

## UpCarousel

Add new component built with framer in order to dipslay a carousel layout

### General usage
```
 <div className={wrapperBoxesStyle}>
        <UpCarousel items={["#22cc88", "#ffcc00", "#0099ff", "#ff0055"].map(color => ({key: color, title: 'Title', color}))} />
 </div>
```

### With render item
```
   <div className={wrapperBoxesStyle}>
     <UpCarousel renderItem={(isOpen, item) => {
       return <div style={{display: 'flex', height : '100%', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between'}}>
          <em style={{ fontWeight : isOpen ? 700 : 500}}>{item.title}</em>
          <UpButton intent={'secondary'} className={style({$nest : {'& .up-btn' : {
            border: '0 !important', color : 'white !important', background: 'transparent'
          }
        }})} onClick={(e) => item.action(item) }>...</UpButton>
         </div>
     }} items={["#22cc88", "#ffcc00", "#0099ff", "#ff0055"].map(color => (
        { key: color,
          action: (item) => new Promise((resolve, reject) => resolve(console.log(item))), 
          title: 'Title',
          color}))
        } />
   </div>
```

# React-Controls (version: 0.2.0)

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
        - `actionsDataGrid?:objectOf`:
          - `label:string`: label of the validation button
          - `intent?:string`: intent of the validation button
          - `actions?:ArrayOf`:
            - `action:ObjectOf`: 
              - `label:string`: label of the selected action
              - `actionType:string`: the actionType of the selected action
              - `onClick:function`: a function that takes an array of the selected rows and return a promise
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
             actionsDataGrid: {
               label: 'Valider',
               intent: 'secondary',
               actions: [
                 {
                   actionType: 'add',
                   label: 'Ajouter un lien',
                   onClick: rows => {
                     console.log('add', rows);
                     return new Promise(() => {});
                   },
                 },
                 {
                   actionType: 'edit',
                   label: 'Mofifier',
                   onClick: rows => {
                     console.log('edit', rows);
                     return new Promise(() => {});
                   },
                 },
                 {
                   actionType: 'delete',
                   label: 'Supprimer',
                   onClick: rows => {
                     console.log('delete', rows);
                     return new Promise(() => {});
                   },
                 },
               ],
             },
           }}
        headerProps={{
          title: 'Titre du tableau',
          buttons: <><UpButton intent='secondary'>Bouton 1</UpButton><UpButton intent='secondary'>Bouton 2</UpButton></>
        }}
      />
```



