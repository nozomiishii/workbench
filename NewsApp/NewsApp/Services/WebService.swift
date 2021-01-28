//
//  Webservice.swift
//  NewsApp
//
//  Created by Nozomi Ishii on 27/01/21.
//

import Foundation

class WebService {
    func getArticles(url: URL, completion: (@escaping [Any]?) -> ()) {
        URLSession.shared.dataTask(with: url) { _, _, error in
            if let e = error {
                print(error?.localizedDescription)
                completion(nil)
            }
        }
    }
}
