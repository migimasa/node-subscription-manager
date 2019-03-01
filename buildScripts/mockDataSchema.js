export const schema = {
    "type": "object",
    "properties": {
      "comicBookSeries": {
        "type": "array",
        "minItems": 3,
        "maxItems": 10,
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "unique": true,
              "minimum": 1
            },
            "writers": {
              "type": "array",
              "minItems": 1,
              "maxItems": 3,
              "items": {
                "type": "string",
                "faker": "name.findName"
              }
            },
            "artists": {
              "type": "array",
              "minItems": 1,
              "maxItems": 3,
              "items": {
                "type": "string",
                "faker": "name.findName"
              }
            },
            "title": {
              "type": "string",
              "faker": "commerce.productName"
            },
            "publisher": {
              "type": "string",
              "faker": "company.companyName"
            },
            "publishDate": {
              "type": "string",
              "faker": "date.past"
            }
          },
          "required": ["id", "writers", "artists", "title", "publisher", "publishDate"]
        }
      }
    },
    "required": ["comicBookSeries"]
  };
