import { Component, Input } from '@angular/core'
import { until } from 'selenium-webdriver'

@Component({
  selector: 'app-table-users',
  template: `
    <div class="card">
      <div class="table-responsive">
        <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
          <thead>
          <tr>
            <th class="text-center w-1"><i class="icon-people"></i></th>
            <th>User</th>
            <th>Usage</th>
            <th class="text-center">Payment</th>
            <th>Activity</th>
            <th class="text-center">Satisfaction</th>
            <th class="text-center"><i class="icon-settings"></i></th>
          </tr>
          </thead>
          <tbody>

          <!--{% for user in site.data.users limit: 8 offset: 50 %}-->
          <!--{% assign percentage = forloop.index | random_number %}-->
          <!--{% assign time_offset = forloop.index | random_number: 0, 800 %}-->
          <!--{% assign register_offset = forloop.index | random_number: 0, 8000000 %}-->
          <tr *ngFor="let user of getUsers()">
            <td class="text-center">
              <ui-avatar [image]="user.photo" status="green"></ui-avatar>
            </td>
            <td>
              <div>{{ user.name }} {{ user.surname }}</div>
              <div class="small text-muted">
                Registered: 
                <!--{{ site.time | date: "%s" | minus: register_offset | date: '%b %-d, %Y' }}-->
              </div>
            </td>
            <td>
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{ percentage }}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                </div>
              </div>
              <div class="progress progress-xs">
                <div class="progress-bar bg-{{ percentage }}" role="progressbar" [style.width]="percentage  + '%'"
                     aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </td>
            <td class="text-center">
              <i class="payment payment-mastercard"></i>
            </td>
            <td>
              <div class="small text-muted">Last login</div>
              <div>
                <!--{{ site.time | date: "%s" | minus: time_offset | to_pretty_time }}-->
              </div>
            </td>
            <td class="text-center">
              <!--{% assign circle-percentage = forloop.index | random_number: 0, 100 %}-->
              <div class="mx-auto chart-circle chart-circle-xs"
                   data-thickness="3" data-color="blue">
                <div class="chart-circle-value">{{ percentage }}%</div>
              </div>
            </td>
            <td class="text-center">
              <!--{% include dropdown-options.html %}-->
            </td>
          </tr>
          <!--{% endfor %}-->
          </tbody>
        </table>
      </div>

    </div>
  `,
  styles: [],
})
export class TableUsersComponent {
  @Input() public users = []

  public getUsers() {
    return this.users.slice(50, 58)
  }
  public get percentage() {
    return Math.floor(Math.random())
  }
}
