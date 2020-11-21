export interface Cards{ 
    data: [ {
        id: number,
        name: string,
        type: string,
        desc: string,
        atk: number,
        def: number,
        level: number,
        race: string,
        attribute: string,
        card_sets: [
            {
              set_name: string,
              set_code: string,
              set_rarity: string,
              set_rarity_code: string,
              set_price: number
            },
            {
              set_name: string,
              set_code: string,
              set_rarity:string,
              set_rarity_code: string,
              set_price: number
            },
            {
              set_name: string,
              set_code:string,
              set_rarity: string,
              set_rarity_code: string,
              set_price: number
            }
          ],
          card_images: [
            {
                id: number,
                image_url: string,
                image_url_small: string
            }
          ],
          card_prices: [
            {
              cardmarket_price: number,
              tcgplayer_price: number,
              ebay_price: number,
              amazon_price: number,
              coolstuffinc_price: number
            }
          ]
        }
      ]
    }