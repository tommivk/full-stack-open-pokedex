describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemons page can be opened and correct data is displayed', function() {
    cy.visit('http://localhost:5000')
    const el = cy.contains('charmander')
    el.click()
    cy.contains('charmander')
    cy.contains('blaze')
    cy.contains('solar power')
  })
})
