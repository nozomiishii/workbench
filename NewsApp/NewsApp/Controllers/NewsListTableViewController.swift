//
//  NewsListTableViewController.swift
//  NewsApp
//
//  Created by Nozomi Ishii on 26/01/21.
//

import Foundation
import UIKit

class NewsListTableViewController: UITableViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setup()
    }

    private func setup() {
        navigationController?.navigationBar.prefersLargeTitles = true
    }
}
